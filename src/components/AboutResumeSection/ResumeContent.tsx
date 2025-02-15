const ResumeContent = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Experience</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-white">Senior UI Designer</h4>
              <span className="text-sm text-gray-400">2022 - Present</span>
            </div>
            <p className="text-sm text-gray-300">
              Lead UI designer for multiple high-profile projects, collaborating
              closely with development teams and stakeholders.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-white">UI Designer</h4>
              <span className="text-sm text-gray-400">2020 - 2022</span>
            </div>
            <p className="text-sm text-gray-300">
              Created intuitive and visually appealing interfaces for web and
              mobile applications, ensuring optimal user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-white">Design</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>UI/UX Design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Visual Design</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-white">Tools</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeContent;
