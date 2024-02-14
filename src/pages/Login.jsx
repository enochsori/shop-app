export default function Login() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };
  return (
    <div>
      <p>Log into SHOP</p>
      <form onSubmit={onSubmit}></form>
    </div>
  );
}
