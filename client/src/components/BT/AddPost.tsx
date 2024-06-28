import React, { useState } from 'react'
import './addPost.scss'
import { useDispatch } from 'react-redux';
import {getAppPost} from '../../store/reducers/postReducer'
export default function AddPost() {
  const [title,setTitle] = useState<string>("");
  const [image,setImage] = useState<string>("");
  const [category,setCategory] = useState<string>("");
  const [content,setContent] = useState<string>("")
  
  const handleChangeTitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }
  const handleChangeImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setImage(e.target.value)
  }
  const handleChangeCategory=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setCategory(e.target.value)
  }
  const handleChangeContent=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setContent(e.target.value)
  }
  const dispatch = useDispatch()
  const handleAddPost=()=>{
    const newPost = {
      title:title,
      thumbnail:image,
      content:content,
      category:category,
      createdAt:"Nghĩa",
      updateAt: new Date(),
      status:true
    }
    dispatch(getAppPost(newPost))
  }
  return (
    <div className='outLine'>
      <div className='inpAdd'>
        <label htmlFor="">Tên bài viết</label>
        <input type="text" className='inp' onChange={handleChangeTitle}/>
      </div>
      <div className='inpAdd'>
        <label htmlFor="">Hình ảnh</label>
        <input type="text" className='inp'onChange={handleChangeImage}/>
      </div>
      <div className='inpAdd'>
        <label htmlFor="">Thể loại</label>
        <input type="text" className='inp'onChange={handleChangeCategory}/>
      </div>
      <div className='inpAdd'>
        <label htmlFor="">Nội dung</label>
        <textarea name="" id="" className='textInp' placeholder='Nhập nội dung' onChange={()=>handleChangeContent}></textarea>
      </div>
      <div className='bntAddPost'>
        <button className='btn' onClick={handleAddPost}>Xuất bản</button>
      </div>
    </div>
  )
}
