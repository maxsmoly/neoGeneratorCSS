import React from 'react'
import './Main.css'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 10,
			resultWidth: 190,
			resultRadius: 20,
			bgResult: '#e0e0e0',
			horizontal: 20,
			vertical: 20,
			blur: 60,
			colorOne: '#bebebe',
			negativeHorizont: -20,
			negatiVertical: -20,
			colorTwo: '#ffffff',
		}
		this.rangeSize = this.rangeSize.bind(this)
		this.rangeRadius = this.rangeRadius.bind(this)
		this.rangeBlur = this.rangeBlur.bind(this)
		this.rangeDistance = this.rangeDistance.bind(this)
		this.colorValue = this.colorValue.bind(this)
	}
	rangeSize(e) {
		this.setState({ resultWidth: +e.target.value })
	}
	rangeRadius(e) {
		this.setState({ resultRadius: +e.target.value })
	}
	rangeBlur(e) {
		this.setState({ blur: +e.target.value })
	}
	rangeDistance(e) {
		this.setState({ horizontal: +e.target.value })
		this.setState({ vertical: +e.target.value })
		this.setState({ negativeHorizont: -+e.target.value })
		this.setState({ negatiVertical: -+e.target.value })
	}
	colorValue(e) {
		console.log(e.target.value)
	}

	render() {
		let horizontal = this.state.horizontal + 'px'
		let vertical = this.state.vertical + 'px'
		let blur = this.state.blur + 'px'
		let colorOne = this.state.colorOne
		let negativeHorizont = this.state.negativeHorizont + 'px'
		let negatiVertical = this.state.negatiVertical + 'px'
		let colorTwo = this.state.colorTwo
		let resultStyle = {
			width: this.state.resultWidth,
			height: this.state.resultWidth,
			borderRadius: this.state.resultRadius,
			background: this.state.bgResult,
			boxShadow: `${horizontal} ${vertical} ${blur} ${colorOne},${negativeHorizont} ${negatiVertical} ${blur} ${colorTwo}`,
		}

		console.log(resultStyle)

		return (
			<main>
				<div className='main' style={{ background: this.state.bgResult }}>
					<div className='render-block'>
						<div className='result' style={resultStyle}></div>
					</div>
					<div className='settings'>
						<input
							className='color-picker'
							onChange={this.colorValue}
							type='color'
							defaultValue={this.state.bgResult}
						/>
						<input
							className='result-size'
							onChange={this.rangeSize}
							type='range'
							min='50'
							max='200'
							step='1'
							defaultValue={this.state.resultWidth}
						/>
						<p>{this.state.resultWidth + 'px'}</p>
						<input
							className='result-radius'
							onChange={this.rangeRadius}
							type='range'
							min='0'
							max='100'
							step='1'
							defaultValue={this.state.resultRadius}
						/>
						<p>{this.state.resultRadius + 'px'}</p>
						<input
							className='result-blur'
							onChange={this.rangeBlur}
							type='range'
							min='0'
							max='100'
							step='1'
							defaultValue={this.state.blur}
						/>
						<p></p>
						<input
							className='result-distance'
							onChange={this.rangeDistance}
							type='range'
							min='0'
							max='100'
							step='1'
							defaultValue='10'
						/>
						<p></p>
						<div className='code-result'>
							<p>
								<code>
									height: {this.state.resultWidth + 'px'};
									<br />
									width: {this.state.resultWidth + 'px'};
									<br />
									border-radius: {this.state.resultRadius + 'px'};
									<br />
									background: {this.state.bgResult}
									<br />
									box-shadow: {this.state.horizontal + 'px '}
									{this.state.vertical + 'px '}
									{this.state.blur + 'px '}
									{this.state.colorOne},
									<br />
									{this.state.negativeHorizont + 'px '}
									{this.state.negatiVertical + 'px '}
									{this.state.blur + 'px '}
									{this.state.colorTwo}
								</code>
							</p>
						</div>
					</div>
				</div>
			</main>
		)
	}
}
export default Main
