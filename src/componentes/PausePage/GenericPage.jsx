import Instructions from '../Instructions/Instructions';
import '../Main/Main.css';

export function GenericPage({ closePage }) {
    return (
        <div>
            <Instructions />
            <div className='mt-3 close-btn-container'>
                <button className='close-btn' onClick={closePage}>CLOSE</button>
            </div>
        </div>
    );
}