import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/0.jpg" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Manish yadav
                    <span>3/05/2021 01:33:50 AM</span>
                </Name>
                <Text>
                    👋Hello Guyzz
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    :hover{
        background: #90909012;
    }
    // box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;

    img{
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;

`
const Name = styled.div`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span{
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97,96,97);
        font-size: 13px;

    }
`
const Text = styled.div`

`