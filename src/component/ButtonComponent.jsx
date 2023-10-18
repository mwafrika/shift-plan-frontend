
const ButtonComponent = ({ size,variant, onClick, children }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'login':
        return 'bg-[#032D7C] text-white';
      case 'delete':
        return 'bg-[#E50303] text-white';
      case 'cancel':
        return 'bg-[#FFFF] text-black';
      case 'deny':
        return '  bg-[#FF3C5F] text-black';
      case 'edit':
        return'bg-[#039BE5] text-black';
      case 'approved':
        return 'bg-[#06AD35] text-white';
      default:
        return  'bg-blue-200 text-white';
    }
  };
  return (
    <button className={`${getButtonStyle()} ${size === 'lg' ? 'px-[1rem] py-[0.5rem]' : 'px-[0.8rem] py-[0.5rem]'} rounded-lg border-none cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
}

{/* <p>
hello
<Button size="lg" variant="deny" onClick={() => console.log('Button clicked')}>
  Click Me</Button>
</p> */}

export default ButtonComponent;