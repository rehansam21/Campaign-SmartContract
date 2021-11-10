// step 3 --> Use Factory instance to retrive a list of deployed campaigns

import React, {Component} from 'react';
import { Card,Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout  from '../components/Layout';
import {Link } from '../routes';


class CampaignIndex extends Component {

    // Next doesnt execute componentDidMount() method if we want to get data from ethereumBlockchain using 
    // Next JS. If we want to interact with ethereum world using Next then
    // we have to use getInitialProps 

    static async getInitialProps () {
        const campaigns = await factory.methods.getDeployedContracts().call();
        return {campaigns: campaigns};
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                    ),
                
                fluid: true

            };
        });

        return <Card.Group items={items} />
    }

    render() {
        
        return (
        <Layout>
            <div> 
                    
                
                <h3> Open Campaign </h3>
                <Link route='/campaigns/new'>
                    <a>
                        <Button floated = 'right' 
                            content = "Create Campaign"
                            icon= "add circle"
                            primary 

                        />
                    </a>
                </Link>

                {this.renderCampaigns()} 
            
            </div>
        </Layout>
        );
    }

}

export default CampaignIndex;



/* 



*/