import './header.scss';
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';

const Header = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));

	const handleClick1 = (e) => {
		e.preventDefault();
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		history.push('/signin');
		window.location.reload();
	};

	const handleClick2 = (e) => {
		e.preventDefault();
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		history.push('');
		window.location.reload();
	};

	return (
		<div>
			<nav className='header'>
				<div className='header__logo'>
					<Link to='/' className='Logo' onClick={handleClick2}><h5>Project-Flow</h5></Link>
					
				</div>
				<div className='header__buttons'>
					{auth.currentUser && auth.currentUser.token ? (
						<Link to='/signin' className='button' onClick={handleClick1}>
							SignOut
						</Link>
					) : (
						<>
							<Link to='/signin' className='button'>
								SignIn
							</Link>
							<Link to='/signup' className='button'>
								SignUp
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
