import { describe, expect, it } from "vitest";
import {
  getAllProjects,
  getHighlightedProjects,
  getProjectBySlug,
  selectHighlightedProjects,
  type Project,
} from "@/lib/projects";

const PRIVATE_SLUGS = ["oypunu", "kaaaki", "factures", "ck-garage-manager"];

function project(slug: string, flags: Pick<Project, "isPublic" | "isHighlighted">): Project {
  return {
    slug,
    title: slug,
    shortDescription: "",
    context: "",
    challenges: "",
    technologies: [],
    duration: "",
    role: "",
    team: "",
    keyPoints: [],
    coverImage: `/${slug}.png`,
    ...flags,
  };
}

describe("projets publics", () => {
  it("n'expose dans la liste aucun projet non public", async () => {
    const slugs = (await getAllProjects()).map((item) => item.slug);

    expect(slugs.length).toBeGreaterThan(0);
    for (const slug of PRIVATE_SLUGS) expect(slugs).not.toContain(slug);
  });

  it("ne retrouve pas un projet non public par son slug", async () => {
    for (const slug of PRIVATE_SLUGS) expect(await getProjectBySlug(slug)).toBeNull();
  });

  it("retrouve un projet public par son slug", async () => {
    expect((await getProjectBySlug("nzonzi-studio"))?.title).toBe("NZONZI Studio");
  });

  it("ne met en avant que des projets publics", async () => {
    const highlighted = await getHighlightedProjects();

    expect(highlighted.every((item) => item.isPublic && item.isHighlighted)).toBe(true);
  });
});

describe("selectHighlightedProjects", () => {
  it("ignore un projet mis en avant mais non public", () => {
    const projects = [
      project("prive", { isPublic: false, isHighlighted: true }),
      project("public-a", { isPublic: true, isHighlighted: true }),
      project("public-b", { isPublic: true, isHighlighted: false }),
    ];

    expect(selectHighlightedProjects(projects).map((item) => item.slug)).toEqual(["public-a"]);
  });

  it("se limite aux trois premiers projets mis en avant", () => {
    const projects = ["a", "b", "c", "d"].map((slug) =>
      project(slug, { isPublic: true, isHighlighted: true }),
    );

    expect(selectHighlightedProjects(projects)).toHaveLength(3);
  });
});
