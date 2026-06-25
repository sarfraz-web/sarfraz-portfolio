/** @format */

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      credentialId: "MYP8EPE2MTKJ",
    },
    {
      title: "Python for Data Science, AI & Development",
      credentialId: "C9DZEGUVS8LH",
    },
    {
      title: "Developing AI Applications with Python and Flask",
      credentialId: "AC6DGEKC8G7T",
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="text-start sm:text-4xl text-3xl font-bold mb-10">
        Certifications
      </h2>
      <div className="space-y-6">
        {certifications.map((certification) => (
          <div
            key={certification.credentialId}
            className="border border-zinc-300 dark:border-zinc-700 p-5 bg-transparent"
          >
            <h3 className="text-xl font-semibold">{certification.title}</h3>
            <p className="text-sm font-mono text-zinc-700 dark:text-gray-400 mt-2">
              Credential ID: {certification.credentialId}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
