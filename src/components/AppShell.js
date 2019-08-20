import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    }
}
class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    handdleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render() {
        const { classes} = this.props;
        return(
            <div classNmae = {classes.root }>
                <AppBar position="static">
                    <IconButton className = {classes.menuButton} color = "inherit" onClick = {this.handdleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                </AppBar>
                <Drawer open = {this.state.toggle}>
                    <MenuItem onClick ={this.handdleDrawerToggle}>Home</MenuItem>
                    <MenuItem onClick ={this.handdleDrawerToggle}>Home</MenuItem>
                    <MenuItem onClick ={this.handdleDrawerToggle}>Home</MenuItem>
                    <MenuItem onClick ={this.handdleDrawerToggle}>Home</MenuItem>

                </Drawer>
            </div>
        )
    }

}

export default withStyles(styles)(AppShell);