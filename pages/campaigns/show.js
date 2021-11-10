import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import {Card} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {

    static async getInitialProps (props) {
      //actual address of the campaign that were trying to show user on this page
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            minimumContribution : summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]

        };
    }

    renderCards () {

        const  {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount

        } = this.props;

        const items = [
            {
            header: manager,
            meta: 'Address of Manager',
            description: 'manager Created campaign and can request to withdraw money',
            style: { overflowWrap : 'break-word'}
            },

            {
                header: minimumContribution,
                meta: 'Minimum Contribution (Wei)',
                description: "You must contribute atleast this much wei"
            },

            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by approvers' 
            },

            {
                headers: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to'
            },

            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance Ether',
                description: 'The balance is how much money company has paid'
            }
        ];
        return <Card.Group items = {items}/>
        
    }

    render () {
        return (
            <Layout>
                <h3> Campaign Show</h3>
                {this.renderCards()}
                
            </Layout>
        );
    }
}


export default CampaignShow;