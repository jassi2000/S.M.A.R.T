import React from 'react'

export default function Blog31(){
    return(
        <div className="blogContainer">
              <h2>Why Shares ‘Available to Sell’ are Different from My Holdings?</h2>

<p>While placing a sell order, investors may find that the shares ‘available to sell’ are different from their holdings. This can happen due to the following reasons-</p> <table>
 <tbody>
 <tr>
 <td><b>Case</b></td>
 <td><b>What Does This Mean?</b></td>
 </tr>
 <tr>
 <td><span >Open sell order on NSE/BSE </span></td>
 <td><span  >You may have already placed a sell order on NSE/BSE and the order may be open(not executed). You cannot duplicate a sell order that is already in progress.&nbsp;</span></td>
 </tr>
 <tr>
 <td><span >Bought today on NSE</span></td>
 <td><span >If you have bought stocks on NSE today then you cannot sell it on BSE the same day on Groww . You can do so the next day onwards.</span></td>
 </tr>
 <tr>
 <td><span >Bought today on BSE</span></td>
 <td><span >If you have bought stocks on BSE today then you cannot sell it on NSE the same day on Groww. You can do so the next day onwards.</span></td>
 </tr>
 <tr>
 <td><span >Bought Today-T2T Stock*</span></td>
 <td><span >The stock you are trying to sell is a trade to trade (T2T) stock. Trade to trade stocks bought today cannot be sold on the same day. You can sell it only after it has been delivered to your Demat account after T+2 days.&nbsp;</span></td>
 </tr>
 <tr>
 <td><span >Demat Delivery Pending – T2T Stock</span></td>
 <td><span >The stock you are trying to sell is a trade to trade (T2T) stock. You can sell it only after it has been delivered to your demat account.&nbsp;</span></td>
 </tr>
 <tr>
 <td><span >Pledged for Margin</span></td>
 <td><span >If you have pledged your shares (to get extra margin against your shares), then you will not be able to sell these shares until they are unpledged.</span></td>
 </tr>
 <tr>
 <td><span >Under Lock-in </span></td>
 <td><span >Your shares might get locked due to regulatory reasons. So you will be able to sell the shares only after the lock-in ends or is lifted. Please check the announcements made by the issuing company for details on the lock-in.&nbsp;&nbsp;</span></td>
 </tr>
 </tbody>
 </table>


     <p><b>*What is a T2T Stock </b></p>
     <p>T2T stocks can only be sold when they have been delivered to your Demat account, i.e two days from placing the order ( T+2 ) days. Whether a scrip is T2T or not is jointly decided by the stock exchanges in consultation with Sebi. The criteria and the list of T2T stocks are listed on the respective websites and reviewed periodically. </p>
     <p><b>Where can I find a list of securities trading in the T2T?</b></p>

     You can find the list of securities in the T2T segment on (https://www.nseindia.com/products/content/equities/equities/equities.htm 1.5k). 

Under Current Market Reports Securities in Rolling (EQ) and Trade for Trade (BE,BT) section. You can download the list of T2T stocks and search for the names of your stocks there. 

        </div>
    )
}