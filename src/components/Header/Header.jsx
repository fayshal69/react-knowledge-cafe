import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto py-6 flex justify-between items-center border-b-2 mb-12'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;