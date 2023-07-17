import image1 from '../image/images.jpg';
import image2 from '../image/images2.jpg';
import image3 from '../image/images3.jpg';
import image4 from '../image/images4.jpg';
import image5 from '../image/images5.jpg';
import image6 from '../image/im.jpg'
import classes from './Headersection.module.css'
import { Fragment } from 'react';
import Input from '../Input/input'
const Headersection = (props) => {
    return (
        <Fragment>

            <div className={classes.containre}>
                {props.children}
                <div className={classes.input}>
                    <Input />
                </div>

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
                        <span>cs class</span>
                        <p className={classes.texttwo}>Do you have React project and I want it</p>
                    </div>
                </div>


                <div className={classes.content}>
                    <div >
                        <img src={image3} alt="imageone" className={classes.img} />
                    </div>
                    <div className={classes.text}>
                        <span> Borther</span>
                        <p className={classes.texttwo}>Hey Masoumeh where is my phone?</p>
                    </div>
                </div>


                <div className={classes.content}>
                    <div >
                        <img src={image4} alt="imageone" className={classes.img} />
                    </div>
                    <div className={classes.text}>
                        <span>Father</span>
                        <p className={classes.texttwo}>what is food for dinner?</p>
                    </div>
                </div>

                <div className={classes.content}>
                    <div >
                        <img src={image5} alt="imageone" className={classes.img} />
                    </div>
                    <div className={classes.text}>
                        <span>Monkia cs class</span>
                        <p className={classes.texttwo}>I want css class do you have?</p>
                    </div>
                </div>


                <div className={classes.content}>
                    <div >
                        <img src={image1} alt="imageone" className={classes.img} />
                    </div>
                    <div className={classes.text}>
                        <span>Teacher</span>
                        <p className={classes.texttwo}>where is your plan?</p>
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
                        <img src={image6} alt="imageone" className={classes.img} />
                    </div>
                    <div className={classes.text}>
                        <span>Sara Rezai</span>
                        <p className={classes.texttwo}>Hello Masoumeh who are you?</p>
                    </div>
                </div>



            </div >
        </Fragment>

    )
}
export default Headersection