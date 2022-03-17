import styled from 'styled-components';



export const AreaHeader = styled.div`
 height: 60px;
 background-image: linear-gradient(to right,#00dffc,#0054c9);
 color: white;
 
 .container{
  display: flex;
  justify-content: space-between;
  align-items: center;

    
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 45px;

        img{
            width:210px;
        }
    

        .title {
        font-size: 28px;
        }
    }

    nav{
        margin-right: 30px;
        
         ul{
             display: flex;
             justify-content: center;
             align-items: center;
         }
         

          li{
              list-style: none;
              margin-left: 30px;

              .avatar{
                  width: 30px;
                  
              }

              a{
                  text-decoration:none;
                  color:white;
                  display:flex;
                  align-items:center;

                  &:hover{
                      color:#ff846b;
                  }
              }
          }
    }

}
`;