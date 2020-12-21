import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { Home } from '@material-ui/icons';

function NavBar() {

    return (
        <div >
            <List component="nav">
                <ListItem component="div" >
                    <ListItemText inset>
                        <TypoGraphy color="secondary" variant="inherit">
                            Home  <Home />
                        </TypoGraphy>
                    </ListItemText>
                </ListItem >

            </List>

        </div>
    )
}


export default NavBar;