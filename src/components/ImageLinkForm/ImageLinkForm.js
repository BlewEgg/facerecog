import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
	return(
		<div>
			<p className='f3'> 
				Think this application can find the faces in your pictures? Try it out.
			</p>
			<div className ='center'>
				<div className='center pa4 br3 shadow-5 form'>
					<input 
						className='f4 pa2 w-70 center' 
						type='text' 
						onChange={onInputChange}
					/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-green' 
						onClick={onButtonSubmit}>Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;