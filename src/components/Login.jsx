import React, {useState} from 'react';
import './Login.scss'
import {userLogin} from '../redux/reducers/auth/auth.thunk';
import {connect, useSelector} from 'react-redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {ReduxToastr} from "react-redux-toastr";


function Login({userLogin}) {
    const [mobile, setMobile] = useState('')
    const [verify, setVerify] = useState('')
    const showInputVerify = useSelector(state => state.auth.showInputVerify)
    console.log(showInputVerify)

    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin(mobile)
        console.log(showInputVerify)
    }

    // const handleChange = (e) => {
    //     setVerify(e.target.value)
    //     if (verify.length === 5) {
    //         userVerification(mobile, verify)
    //         setVerify('')
    //     }
    //
    // }


    return (
        <div className='container' style={{height: '100vh'}}>
            <div className='row h-100 justify-content-center align-items-center'>
                <div className="col-10 col-md-8 col-lg-6 mx-auto bg-dark rounded">
                    <div className="row ">
                        <div className="col-6  mx-auto text-center text-white pt-2">
                            ورود به آنتن
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-10 mx-auto text-center  text-white" style={{lineHeight: '30px'}}>
                            برای مشاهده این برنامه شما نیاز دارید ابتدا وارد حساب کاربری خود شوید و یا در آن ثبت نام
                            کنید.
                            لطفا شماره تلفن خود را وارد نمایید.
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mx-auto text-center">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-8 mx-auto">
                                        <div className="form-group mb-5">
                                            <input
                                                value={mobile}
                                                onChange={e => setMobile(e.target.value)}
                                                type="text" className="form-control" id={"exampleInputEmail1"}
                                                dir={'ltr'}
                                                placeholder={'09********'}/>
                                        </div>
                                    </div>
                                </div>

                                {
                                    showInputVerify ?
                                        <div className="row">
                                            <div className="col-8 mx-auto">
                                                <div className="form-group mb-5">
                                                    <input
                                                        value={verify}
                                                        onChange={e => setVerify(e.target.value)}
                                                        type="text" className="form-control "
                                                        placeholder={'لطفا کد ارسالی را وارد کنید'}/>
                                                </div>
                                            </div>
                                        </div> : null
                                }


                                <div className="row">
                                    <div className="col-12 text-left">
                                        <button type="submit"
                                                className="btn btn-danger  rounded-pill mb-2  text-white">دریافت کد
                                            ورود
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default connect(null, {userLogin})(Login);


// <Row xs={12}>
//     <Form onSubmit={(e) => handleSubmit(e, 0)}>
//         <FormGroup>
//             <Label for="mobile">Mobile Number</Label>
//             <Input
//                 value={mobile}
//                 onChange={e => setMobile(e.target.value)}
//                 type="text" id="mobile" placeholder="Enter your number"/>
//         </FormGroup>
//         <Button type='submit'>Submit</Button>
//
//         {count ?
//             <FormGroup>
//                 <Input
//                     value={verify}
//                     onChange={handleChange}
//                     type="tel" placeholder="Enter sms Code"/>
//             </FormGroup>
//             :
//             null
//         }
//     </Form>
// </Row>


// class Login extends React.Component {
//     handleSubmit = (values) => {
//         console.log(values)
//     }
//
//     render() {
//         console.log(this.props.show)
//         return (
//             <div className='container' style={{height: '100vh'}}>
//                 <div className='row h-100 justify-content-center align-items-center'>
//                     <div className="col-10 col-md-8 col-lg-6 mx-auto bg-dark rounded">
//                         <div className="row ">
//                             <div className="col-6  mx-auto text-center text-white pt-2">
//                                 ورود به آنتن
//                             </div>
//                         </div>
//
//                         <div className="row my-5">
//                             <div className="col-10 mx-auto text-center  text-white" style={{lineHeight: '30px'}}>
//                                 برای مشاهده این برنامه شما نیاز دارید ابتدا وارد حساب کاربری خود شوید و یا در آن ثبت نام
//                                 کنید.
//                                 لطفا شماره تلفن خود را وارد نمایید.
//                             </div>
//                         </div>
//
//                         <div className="row">
//                             <div className="col-12 mx-auto text-center">
//                                 <form onSubmit={this.handleSubmit}>
//                                     <div className="row">
//                                         <div className="col-8 mx-auto">
//                                             <div className="form-group mb-5">
//                                                 <input
//
//
//                                                     type="text" className="form-control" id={"exampleInputEmail1"}
//                                                     dir={'ltr'}
//                                                     placeholder={'09********'}/>
//                                             </div>
//                                         </div>
//                                     </div>
//
//
//                                     <div className="row">
//                                         <div className="col-8 mx-auto">
//                                             <div className="form-group mb-5">
//                                                 <input
//                                                     type="text" className="form-control "
//                                                     placeholder={'لطفا کد ارسالی را وارد کنید'}/>
//                                             </div>
//                                         </div>
//                                     </div>
//
//
//                                     <div className="row">
//                                         <div className="col-12 text-left">
//                                             <button type="submit"
//                                                     className="btn btn-danger  rounded-pill mb-2  text-white">دریافت کد
//                                                 ورود
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//
// }
//
// const mapStateToProps = state => {
//     return {
//         show: state.auth.showInputVerify
//     }
// }
// export default connect(mapStateToProps, {})(Login);