// eslint-disable-next-line react/prop-types
export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center'>
      <img
        src={photoURL}
        alt={displayName}
        className='w-10 rounded-full mr-2 text-sm shrink-0'
      />
      <span className='hidden md:block text-lg'>{displayName}</span>
    </div>
  );
}
