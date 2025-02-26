
interface ContactUsLogosProps {
 src:string
}
export const ContactUsLogos :  React.FC<ContactUsLogosProps> = ({src}) => {
  return (
    <div className="w-full h-fit flex justify-between items-center">
        <img className="w-36 h-12" src={src} alt="" />
    </div>
  )
}
