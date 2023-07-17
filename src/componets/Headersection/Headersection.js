import image1 from '../image/images.jpg';
import image2 from '../image/images2.jpg';
import image3 from '../image/images3.jpg';
import image4 from '../image/images4.jpg';
import image5 from '../image/images5.jpg';




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


            <div className={classes.content}>
                <div >
                    <img src={image3} alt="imageone" className={classes.img} />
                </div>
                <div className={classes.text}>
                    <span>Sara Rezai</span>
                    <p className={classes.texttwo}>Hello Masoumeh who are you?</p>
                </div>
            </div>


            <div className={classes.content}>
                <div >
                    <img src={image4} alt="imageone" className={classes.img} />
                </div>
                <div className={classes.text}>
                    <span>Sara Rezai</span>
                    <p className={classes.texttwo}>Hello Masoumeh who are you?</p>
                </div>
            </div>

             <div className={classes.content}>
                <div >
                    <img src={image5} alt="imageone" className={classes.img} />
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

             <div className={classes.content}>
                <div >
                    <img src={image2} alt="imageone" className={classes.img} />
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