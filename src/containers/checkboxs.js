import React, {Component} from 'react';
import CheckBoxItem from '../components/checkbox-item';

class Checkboxs extends Component {

  constructor(props) {
    super(props)
    /*
    Déclaration des checkboxs : 
      - allchecked (checkbox selectionner tout) : objet contenant le statut (isChecked) de la checkbox
      - checkboxs (checkboxs individuelles) : tableau d'objet contenant le statut (isChecked) de la checkbox et un nom (value)
    */
    this.state = {
      allChecked: {isChecked: false},
      checkboxs: [
        {value:"Item 1",isChecked: false},
        {value:"Item 2",isChecked: false},
        {value:"Item 3",isChecked: false},
        {value:"Item 4",isChecked: false},
        {value:"Item 5",isChecked: false},
      ]
    }
  }


  //Gestion de la Selection automatique de la checkbox ayant la value "allCheck"
  handleAllChecked = (e) => {
    let checkboxs = this.state.checkboxs
    
    //cocher la checkbox si l'evenement est declenché et que la valeur courante de la checkbox est fausse
    if(!this.state.allChecked.isChecked)
      this.setState({allChecked:{isChecked:true}})
          
    //décocher la checkbox si l'evenement est declenché et que la valeur courante de la checkbox est vraie
    if(this.state.allChecked.isChecked)
      this.setState({allChecked:{isChecked:false}})

    //appliquer l'état de la checkbox (coché ou décoché) à toutes les checkboxs
    checkboxs.forEach(item => item.isChecked = e.target.checked) 
    this.setState({checkboxs: checkboxs})
  }

 
   //Gestion des checkboxs selon les états de chacunes d'entre elle
   handleCheckItem = (e) => {
    let checkboxs = this.state.checkboxs

    //parcours des checkboxs et application de l'etat remonté par l'evenement à la checkbox courante
    checkboxs.forEach(item => {
       if (item.value === e.target.value)
          item.isChecked =  e.target.checked
    })

    
    this.setState({checkboxs: checkboxs})


    //vérification des checkboxs en mappant sur l'élement de vérification d'état (isChecked)


    //cochage de la checkbox "Selectionner tout" dans le cas ou aucune checkbox du tableau retourne l'état faux
    if(!checkboxs.map(x => x.isChecked).includes(false)) {
      this.setState({allChecked:{isChecked:true}})
    }

    //décochage de la checkbox Selectionner tout dans le cas ou les checkbox du tableau ne sont pas toutes à l'état vrai
    if(!checkboxs.map(x => x.isChecked).includes(true)) {
      this.setState({allChecked:{isChecked:false}})
    }

    //décochage de la checkbox Selectionner tout dans le cas ou au moins une checkbox retourne l'état faux
    if(checkboxs.map(x => x.isChecked).includes(false)) {
      this.setState({allChecked:{isChecked:false}})
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Technical test</h1>
        {/* Checkbox (this.state.allChecked) "Selectionner Tout" appelant un évenement*/}
        <label className="container">
            <input className="checkbox" type="checkbox" onChange={this.handleAllChecked} checked={this.state.allChecked.isChecked} value={"select-all"} />
            Select all
            <span className="checkmark"></span>
        </label>
                     

        {/* Checkboxs this.state.checkboxs) affichés par l'intermediaire d'un mapping qui retourne pour chaque item la Classe CheckBoxItem */}
        <div>
          {this.state.checkboxs.map(item => {
            return (<CheckBoxItem  key={item.value} handleCheckItem={this.handleCheckItem} onChange={this.handleUnCheckedAll}  {...item} />)
          })}
        </div>
      </div>
    );
  }
}
export default Checkboxs;
