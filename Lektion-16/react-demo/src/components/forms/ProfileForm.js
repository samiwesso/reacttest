import React, { Component } from 'react'

class EditProfileForm extends Component {
    render() {
        return(
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">Förnamn</label>
                            <input type="text" className="form-control" id="firstname" value={this.props.user.firstname} onChange={this.props.onChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Efternamn</label>
                            <input type="text" className="form-control" id="lastname" value={this.props.user.lastname} onChange={this.props.onChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="email">E-postadress</label>
                            <input type="email" className="form-control" id="email" value={this.props.user.email} onChange={this.props.onChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="addressline">Adress</label>
                            <input type="text" className="form-control" id="addressline" value={this.props.user.addressline} onChange={this.props.onChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="zipcode">Postnummer</label>
                            <input type="text" className="form-control" id="zipcode" value={this.props.user.zipcode} onChange={this.props.onChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="city">Ort</label>
                            <input type="text" className="form-control" id="city" value={this.props.user.city} onChange={this.props.onChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="country">Land</label>
                            <input type="text" className="form-control" id="country" value={this.props.user.country} onChange={this.props.onChange} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary px-2" onClick={this.props.saveEdit}>Spara</button>
                    <button type="reset" className="btn btn-danger ml-3 px-2" onClick={this.props.cancelEdit}>Avbryt</button>

                    </form>
            </div>

        )
    }
}

export default EditProfileForm