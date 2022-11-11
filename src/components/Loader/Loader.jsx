import { Oval } from 'react-loader-spinner'



export const Loader = () => {
return (
    <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        position: 'fixed',
        
        height: '100%',
        
      }}>
<Oval
     
  height={100}
  width={100}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
</div>
)

}