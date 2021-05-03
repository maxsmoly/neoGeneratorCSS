import React from 'react'
import './Main.css'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 10,
			resultWidth: 100,
			resultRadius: 20,
		}
		this.rangeSize = this.rangeSize.bind(this)
		this.rangeRadius = this.rangeRadius.bind(this)
	}
	rangeSize(e) {
		this.setState({ resultWidth: +e.target.value })
	}
	rangeRadius(e) {
		this.setState({ resultRadius: +e.target.value })
		console.log(+e.target.value)
	}

	render() {
		let resultStyle = {
			width: this.state.resultWidth,
			height: this.state.resultWidth,
			borderRadius: this.state.resultRadius,
		}
		return (
			<main>
				<div className='main'>
					<div className='render-block'>
						<div className='result' style={resultStyle}></div>
					</div>
					<div className='settings'>
						<input className='result-size' onChange={this.rangeSize} type='range' min='50' max='200' step='1' />
						<p>{this.state.resultWidth + 'px'}</p>
						<input
							className='result-radius'
							onChange={this.rangeRadius}
							type='range'
							min='0'
							max='100'
							step='1'
							defaultValue='10'
						/>
						<p>{this.state.resultRadius + 'px'}</p>
					</div>
				</div>
			</main>
		)
	}
}
export default Main
