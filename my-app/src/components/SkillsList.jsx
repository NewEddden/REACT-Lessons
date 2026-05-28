function SkillsList({ title, skills }) {
  return (
    <>
      <h2>{title}</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillsList;
