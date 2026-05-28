function TimeGreeting() {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? 'morning' : hour >= 12 && hour < 18 ? 'afternoon' : 'evening';

  return (
    <>
      <p>Good {timeOfDay}!</p>
    </>
  );
}

export default TimeGreeting;
