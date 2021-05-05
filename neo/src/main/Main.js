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
			horizontal: 22,
			vertical: 22,
			blur: 60,
			colorOne: '#bebebe',
			negativeHorizont: -22,
			negatiVertical: -22,
			colorTwo: '#FFFFFF',
			shadowRes: '',
		}
		this.rangeSize = this.rangeSize.bind(this)
		this.rangeRadius = this.rangeRadius.bind(this)
		this.shadowString = this.shadowString.bind(this)
	}
	rangeSize(e) {
		this.setState({ resultWidth: +e.target.value })
	}
	rangeRadius(e) {
		this.setState({ resultRadius: +e.target.value })
	}
	shadowString() {
		let a = this.state.horizontal + 'px '
		let b = this.state.vertical + 'px '
		let c = this.state.blur + 'px '
		let d = ',' + this.state.negativeHorizont + 'px '
		let e = this.state.negatiVertical + 'px '
		this.setState({ horizontal: a })
		this.setState({ vertical: b })
		this.setState({ blur: c })
		this.setState({ colorOne: this.state.colorOne })
		this.setState({ shadowRes: a + b + c + this.state.colorOne + d + e + c + this.state.colorTwo })
		console.log(this.state.shadowRes)
	}

	render() {
		let resultStyle = {
			width: this.state.resultWidth,
			height: this.state.resultWidth,
			borderRadius: this.state.resultRadius,
			background: this.state.bgResult,
			boxShadow: this.state.shadowRes,
		}

		console.log(resultStyle)
		console.log(this.state.shadowRes)

		return (
			<main>
				<div className='main' style={{ background: this.state.bgResult }}>
					<div className='render-block'>
						<div className='result' style={resultStyle}></div>
					</div>
					<div className='settings'>
						<input
							className='result-size'
							onInput={this.rangeSize}
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
							className='result-distance'
							onChange={this.rangeSize}
							type='range'
							min='0'
							max='100'
							step='1'
							defaultValue='10'
						/>
						<p></p>
						<input
							className='result-blur'
							onChange={this.rangeRadius}
							type='range'
							min='0'
							max='100'
							step='1'
							defaultValue='10'
						/>
						<p></p>
						<div className='code-result'>
							<p>
								<pre>
									<code>
										height: {this.state.resultWidth + 'px'};
										<br />
										width: {this.state.resultWidth + 'px'};
										<br />
										border-radius: {this.state.resultRadius + 'px'};
										<br />
										background: {this.state.bgResult}
										<br />
										box-shadow:{this.state.shadowRes}
									</code>
								</pre>
							</p>
						</div>
					</div>
				</div>
			</main>
		)
	}
}
export default Main
