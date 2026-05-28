import Profile from './components/Profile';
import MathFacts from './components/MathFacts';
import TimeGreeting from './components/TimeGreeting';
import SkillsList from './components/SkillsList';
import UserCard from './components/UserCard';
import StatCard from './components/StatCard';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import TextInput from './components/TextInput';
import ColorPicker from './components/ColorPicker';

const cardStyle = {
  background: 'var(--color-bg, #fff)',
  border: '0.5px solid #d1d5db',
  borderRadius: '12px',
  padding: '1.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '8px',
};

const labelStyle = {
  fontSize: '11px',
  fontWeight: '500',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#9ca3af',
  marginBottom: '4px',
};

function Card({ label, children }) {
  return (
    <div style={cardStyle}>
      <p style={labelStyle}>{label}</p>
      {children}
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px',
        padding: '24px',
      }}
    >
      <Card label="Profile">
        <Profile
          name="Edly Cenatus"
          title="Direct Support Professional"
          bio="My name is Edly and I'm learning React."
        />
      </Card>

      <Card label="Profile 2">
        <Profile
          name="MaGreedy"
          title="Bag Flipper"
          bio="My name is MaGreedy and I'm a bag Flipper."
        />
      </Card>

      <Card label="Math Facts">
        <MathFacts />
      </Card>

      <Card label="Time Greeting">
        <TimeGreeting />
      </Card>

      <Card label="Skills List">
        <SkillsList
          title="My Skills"
          skills={['Gaming', 'Coding', 'Learning']}
        />
      </Card>

      <Card label="User Card">
        <UserCard
          name="Edly Cenatus"
          role="DSP"
          location="NJ"
          skills={['Gaming', 'Coding', 'Learning']}
        />
      </Card>

      <Card label="Stat Cards">
        <StatCard label="Number 1" value="41" />
        <StatCard label="Number 2" value="42" />
        <StatCard label="Number 3" value="43" />
      </Card>

      <Card label="Counter">
        <Counter />
      </Card>

      <Card label="Toggle">
        <Toggle />
      </Card>

      <Card label="Text Input">
        <TextInput />
      </Card>

      <Card label="Color Pickers">
        <ColorPicker />
      </Card>
      <Card label="New"></Card>
    </div>
  );
}

export default App;
