function Query(){
    return (
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="panel panel-container">
			 <p  class="line">Query Section</p>
    
 
<table class="styled-table"style={{width:999}}>
  <thead class="tableheading" >
            <th style={{textAlign:'left'}}colspan="2" class="column">Next Query Session</th>
  </thead>
    <tbody style={{fontSize:20}}>
        <tr class="active-row">
            <td><iframe class="youtube"  src="https://www.youtube.com/embed/il_t1WVLNxk"> </iframe></td>
        <td style={{width: 600,paddingLeft:200}}><p style={{
    paddingLeft:25,color:"black"
}}>Date&nbsp;&nbsp;30/12/2020</p>
<p style={{
    paddingLeft: 25,color:"black"
}}>Time&nbsp;&nbsp;Evening 6 to 7 pm</p>
<p style={{
paddingLeft: 0,paddingRight: 0,marginLeft:25,color:"black"
}}>Topic&nbsp;&nbsp;Angular</p></td>
        </tr>
    </tbody>
</table>
<table class="styled-table"style={{width:999}}>
  <thead class="tableheading">
            <th style={{textAlign:'left'}}colspan="6" class="column">History Of Queries</th>
  </thead>
    <thead class="active-head">
        <tr class="active-head">
            <th>Date</th>
            <th class="column">Ticket Name</th>
            <th colspan="2">Description</th>
            <th class="column">Type</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody style={{fontSize:20}}>
        <tr class="active-row">
            <td>20/1/2021</td>
            <td class="column">Javascript</td>
            <td colspan="2">What Is Javascript</td>
            <td class="column"> Subjective</td>
            <td class="green">Answered</td>
        </tr>
        <tr class="active-row">
            <td>21/1/2021</td>
            <td class="column">Angular</td>
            <td colspan="2">What is Angular</td>
            <td class="column">Descriptive</td>
            <td class="violet">Processing</td>
        </tr>
        <tr class="active-row">
            <td>22/1/2021</td>
            <td class="column">React</td>
            <td colspan="2">What is React</td>
            <td class="column">Objective</td>
            <td class="red">Not Answered</td>
        </tr>
    </tbody>
</table>
<button type="button" class="click">Create Ticket</button>
		</div>
        </div>
    )
}
export default Query;