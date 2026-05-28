import SkillsList from './SkillsList';
function UserCard({ name, role, location, skills }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <h2>{location}</h2>
      <SkillsList title="My Skills" skills={skills} />
    </>
  );
}
export default UserCard;
