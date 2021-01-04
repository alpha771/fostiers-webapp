import React from 'react'
import { Alert, Input, Select } from '../components'
import { postData } from '../libs/fetch'

const API_URL = process.env.REACT_APP_API_URL

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: null,
      error: null,
      user: {
        FullName: '',
        Nim: '',
        Email: '',
        Password: '',
        Year: ''
      }
    }

    this.handleInputChange.bind(this)
    this.doRegister.bind(this)
  }

  handleInputChange(field, value) {
    this.setState(prevState => ({
      user: { ...prevState.user, [field]: value }
    }))
  }

  validateData() {
    if (Object.values(this.state.user).filter(value => !value).length > 1) {
      this.setState({ error: "Data tidak boleh ada yang kosong" })
      return false
    }

    return true
  }

  doRegister() {
    if (this.validateData()) {
      postData(API_URL + '/user', {
        body: JSON.stringify(this.state.user),
        onSuccess: (response) => {
          const {status: { Message, Status }} = response

          if (Status === 'Success') {
            this.setState({ success: Message })
            // do something
            return
          }

          this.setState({ error: Message })
        },
        onError: () => {
          this.setState({ error: 'Terdapat kesalahan pada sistem. Hubungi administrator.' })
        }
      })
    }
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6">

          <div>
            <img className="mx-auto h-12 w-auto" src="/logo.png" alt="" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Form Pendaftaran
            </h2>
            <p className="mt-2 text-gray-600 text-sm text-center">
              NIM dan Password akan digunakan untuk untuk login
            </p>
          </div>

          {this.state.error && <Alert variant="danger">{this.state.error}</Alert> }
          {this.state.success && <Alert variant="success">{this.state.success}</Alert> }

          <div>
            <Input
              value={this.state.user.FullName}
              placeholder="Nama Lengkap"
              onChange={(ev) => this.handleInputChange('FullName', ev.target.value)}
            />
            <div className="flex flex-wrap -mx-2 mt-3">
              <div className="w-1/2 px-2 mb-3">
                <Input
                  value={this.state.user.Nim}
                  placeholder="NIM"
                  onChange={(ev) => this.handleInputChange('Nim', ev.target.value)}
                />
              </div>
              <div className="w-1/2 px-2 mb-3">
                <Select
                  placeholder="Angkatan Fosti"
                  options={[
                    {
                      label: '2017',
                      value: 17
                    },
                    {
                      label: '2018',
                      value: 18
                    },
                    {
                      label: '2019',
                      value: 19
                    },
                    {
                      label: '2020',
                      value: 20
                    }
                  ]}
                  onChange={(value) => this.handleInputChange('Year', value)}
                />
              </div>
              <div className="w-1/2 px-2 mb-3">
                <Input
                  type="email"
                  value={this.state.user.Email}
                  placeholder="Email"
                  onChange={(ev) => this.handleInputChange('Email', ev.target.value)}
                />
              </div>
              <div className="w-1/2 px-2 mb-3">
                <Input
                  type="password"
                  value={this.state.user.Password}
                  placeholder="Password"
                  onChange={(ev) => this.handleInputChange('Password', ev.target.value)}
                />
              </div>
            </div>

            <div className="mt-2">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.doRegister()}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register