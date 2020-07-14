import React, { Component } from 'react'

export class Contacts extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Nome</label><br />
                    <input type="text" value=""/>
                </div><br /><br />
                <div>
                    <label>Email</label><br />
                    <input type="text" value=""/>
                </div><br /><br />
                <div>
                    <label>Password</label><br />
                    <input type="text" value=""/>
                </div>
            </form>
        )
    }
}

export default Contacts
