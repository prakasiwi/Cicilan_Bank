/* eslint-disable no-undef */
import react, {Component} from 'react';

class Pinjaman extends Component{
  constructor() {
    super();
    this.state ={
        nominal: 0,
        bunga: 0,
        periode: 0,
        hasildata: 0,
    }
  }
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
    Operasi = (event) => {
      event.preventDefault();
      let data = {
        nominal: this.state.nominal,
        bunga: this.state.bunga,
        periode: this.state.periode,
      }
      if(data.periode === 0){
        this.setState({
          hasildata: "Tolong Pilih Periode Dengan Benar"
        })
      }else{
        let data_1 = data.nominal/ parseInt(data.periode)
        let data_bunga = (data.nominal*data.bunga/100/parseInt(data.periode))
        let hasil_data = data_bunga + data_1

        this.setState({
          hasildata: hasil_data
        })
      }
    }
    render(){
      return(
        <div className="container col-sm-5 bd">
          <div className="padd">
            <center>
              <div className="alert">
                <h2 className="text">Cicilan Bank</h2>
              </div>
            </center>
            <form onSubmit={this.Operasi}>
              <div className="body">
                <center><h4 className="text">Nominal</h4>
                <input type="number" name="nominal" className="form-control" value={this.state.nominal} onChange={this.bind} required />
                <br></br>
                <h4 className= "text">Bunga</h4>
                    <input type="number" name="bunga" className="form-control" value={this.state.bunga} onChange={this.bind} required />
                    <br></br>   
                <h4 className= "text">Periode</h4>  
                    <select  name="periode" className="form-control" value={this.state.periode} onChange={this.bind}>
                        <option value="0" >Pilih Bulan</option>
                        <option value="6" >6 Bulan</option>
                        <option value="12"> 12 Bulan</option>
                    </select><br></br>   
                </center>
              </div>
              <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">Hitung</button>
              </div>
            </form>
            <br></br>
            <div className="alert alert-info">
                    <strong><center>Rp. {this.state.hasildata}</center></strong> 
            </div>
          </div>
        </div>
      );
    }
}

export default Pinjaman;
