import React from 'react'
import ChatBot from 'react-simple-chatbot';

const steps = [
    {
        id: '1',
        message: 'Hello!',
        trigger: '2',
    }, 
    {
        id: '2',
        message: "What is your name?",
        trigger: '3',
    },
     {
        id: '3',
        user: true,
        trigger: 4
    }, {
        id: '4',
        message: "{previousValue},What can I help for you?",
        trigger: 5
    },
    {
        id: '5',
        message: "This chatbot is only for contacting the owner of this site.",
        trigger: 6
    },
    {
        id: '6',
        message: "Would you like a phone number or email from the owner of this site?",
        trigger: 7
    },
    {
        id: '7',
        options: [
          { value: 1, label: 'Phone Number', trigger: '8' },
          { value: 2, label: 'Email', trigger: '9' },
        ],
      },
      {
        id: '8',
        message: "+959409780022",
        trigger: 7
    },
    {
        id: '9',
        message: "mgmauktheinkha@gmail.com",
        trigger: 7,
        end : true
    },
];
 
// Set some properties of the bot
const config = {
    botAvatar: "https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white-thumbnail.png",
    floating: true,
    
};

const Chatbot = () => {

  return (
        <ChatBot
            headerTitle="Duno Bot"
            steps={steps}
            {...config}
            floatingStyle={{left : '30px',transformOrigin : 'left bottom'}}
            contentStyle={{backgroundColor : 'white',marginTop : '0px'}}
            inputStyle={{backgroundColor : '#d8deed',color :"#000000",opacity : '1'}}
            bubbleStyle={{wordWrap : 'break-word'}}
        />

  )
}

export default Chatbot