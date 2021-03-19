import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      height: "100vh"      
    },
    inputspace: {
        marginBottom: "5px"
    },
    
  });

export default function Login(props) {
    const classes = useStyles(); 
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpaswword] = useState("");

    const handleSubmit = () => {

    }

    return (
        <div className={classes.root}>
        <Card>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="email" value={useremail} onChange={(e) => setUseremail(e.target.value)} className={classes.inputspace} /> <br />
                        <input type="password" name="password" value={userpassword} onChange={(e) => setUserpaswword(e.target.value)}  />
                    </div> 
                    <Button type="submit">Login</Button>
                </form>
            </CardContent>
        </Card>         
        </div>
    )
}
