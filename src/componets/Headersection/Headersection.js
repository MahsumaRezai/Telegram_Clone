import image1 from '../image/images.jpg';
import image2 from '../image/images2.jpg';
import classes from './Headersection.module.css'
const Headersection = (props) => {
    return (
        <div className={classes.containre}>
            {props.children}
            <div className={classes.content}>
                <div >
                    <img src={image1} alt="imageone" className={classes.img} />
                </div>
                <div className={classes.text}>
                    <span>Sara Rezai</span>
                    <p className={classes.texttwo}>Hello Masoumeh who are you?</p>
                </div>

    

            </div>
            <div className={classes.content}>
                <div >
                    <img src={image2} alt="imageone" className={classes.img} />
                </div>
                <div className={classes.text}>
                    <span>Sara Rezai</span>
                    <p className={classes.texttwo}>Hello Masoumeh who are you?</p>
                </div>

                

            </div>



        </div>

    )
}
export default Headersection