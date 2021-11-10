import React , { Component } from 'react';
import { Form, Button, Input, Message  } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
// Link Object is a react component that allows us to render anchor tags into our react.
// Router object allows us to programmatically redirect people from one page to another page inside our app.
import { Router} from '../../routes';

class CampaignNew extends Component {
    state = {
    minimumContribution: '',
    errorMessage: ''
    };

    onSubmit = async (event) => {
    // prevent browser from attempting to submit the form
    event.preventDefault(); 
    try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
        Router.pushRoute('/');
        } catch(err) {
            this.setState({errorMessage: err.message });

        }
    

    };

    render() {
        return  (
        <Layout>
            <h3> Create a Campaign </h3>
            <form onSubmit = {this.onSubmit} error={this.state.errorMessage} class="ui form">
                <div class="field">
                    <label>Minimum Contribution</label>
                    <label>          </label>
                    <label>          </label>
                    <Input  
                        label='wei' labelPosition = 'right' placeholder="Minimum Contribution"
                        value = {this.state.minimumContribution}
                        onChange = {
                            event => this.setState ({ minimumContribution: event.target.value})
                        }    
                    />
                </div>
                <Message error  content={this.state.errorMessage} /> 
                <button class="ui button" type="submit">Create</button>
            </form>
            
        </Layout>
        );
    }
    }

export default CampaignNew;