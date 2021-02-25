import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import 'rc-slider/assets/index.css';
import "./Navbar.css";


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = { 
            format: "hex",
            open: true 
        };

        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange(event) {
        this.setState({ format: event.target.value });
        this.props.handleChange(event.target.value);
    }
  
    closeSnackbar() {
        this.setState({
            open: false
        })
    }

    render() {
        const { level, changeLevel, handleChange } = this.props;
        const { format } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select 
                        value={format} 
                        onChange={this.handleChange}
                    >
                        <MenuItem value="hex">HEX #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }} 
                    open={this.state.open} 
                    autoHideDuration={3000} 
                    message={<span id="message-id">Format Changed</span>} 
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color="inherit">
                            <CloseIcon />
                        </IconButton>
                    ]}

                />
            </header>
        )
    }
}

export default Navbar;
