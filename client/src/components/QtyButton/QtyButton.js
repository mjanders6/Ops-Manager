import React from 'react';
import { Input } from 'reactstrap'

const user = {
    status: '2'
}

const auth = _ => {
    if (sessionStorage.getItem('status') === '2') {
        return (
            <Input type="select" name="select">
                <option value=""></option>
                <option value='OC'>OC</option>
                <option value='LA'>LA</option>
                <option value='Local'>Local</option>
                <option value='Temecula'>Temecula</option>
                <option value='Riverside'>Riverside</option>
            </Input>
        );
    } else {
        return (
            "not admin"
        )
    }
}


const QtyButton = (props) => {

    return (
        auth()
    );
}

export default QtyButton;