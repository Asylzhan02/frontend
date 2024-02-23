import './footer.css'
/*компонент футер */

const Footer=(props)=>{


    return(
       <div > 
      <div className="footer">
      <footer>
      
      <ul className="menu">

          <li><a href="https://www.instagram.com/">Instagrem</a></li>
          <li><a href="https://mail.ru/">Mail.ru</a></li>
          <li><a href="https://github.com/">ginhub</a></li>
          <li><a href="https://web.telegram.org/">Telegram</a></li>
      </ul>
      <p>@Design by Asylzhan</p>
  </footer>

 </div>
 </div>
    )
}

export default Footer;