import Profile from './components/Profile';
import MathFacts from './components/MathFacts';
import TimeGreeting from './components/TimeGreeting';
import SkillsList from './components/SkillsList';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Profile
        name="Edly Cenatus"
        title="Direct Support Professional"
        bio="My name is Edly and I'm learning React."
      />
      <Profile
        name="Mc Donald"
        title="Fry Flipper"
        bio="My name is Mc Donald and I'm a Fry Flipper."
      />
      <MathFacts />
      <TimeGreeting />
      <SkillsList title="My Skills" skills={['Gaming', 'Coding', 'Learning']} />
      <UserCard
        name="Edly Cenatus"
        role="DSP"
        location="NJ"
        skills={['Gaming', 'Coding', 'Learning']}
      />
    </>
  );
}

export default App;
