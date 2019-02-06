
//Variables globales
var respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9,
  respuesta10, respuesta11, respuesta12, respuesta13, respuesta14, respuesta15, respuesta16, respuesta17, respuesta18,
  respuesta19, respuesta20, respuesta21, respuesta22, respuesta23, respuesta24, respuesta25, respuesta26, respuesta27,
  respuesta28, respuesta29, respuesta30, respuesta31;


//Respuesta 1
function respuestaUno(evt) {
  respuesta1 = document.getElementById(evt.target.id).value
}

//Respuesta 2
function respuestaDos(value) {
  respuesta2 = value.target.value
}

//Respuesta 3
function respuestaTres(value) {
  respuesta3 = value.target.value
}

//Respuesta 4
function respuestaCuatro(value) {
  respuesta4 = value.target.value
}

//Respuesta 5
function respuestaCinco(evt) {
  respuesta5 = document.getElementById(evt.target.id).value
}

//Respuesta 6
function respuestaSeis(evt) {
  respuesta6 = document.getElementById(evt.target.id).value
}

//Respuesta 7
function respuestaSiete(evt) {
  respuesta7 = document.getElementById(evt.target.id).value
}

//Respuesta 8
function respuestaOcho(evt) {
  respuesta8 = document.getElementById(evt.target.id).value
}

//Respuesta9
function respuestaNueve(evt) {
  respuesta9 = document.getElementById(evt.target.id).value
}

//Respuesta 10
function respuestaDiez(evt) {
  respuesta10 = document.getElementById(evt.target.id).value
}

//Respuesta 11
function respuestaOnce(evt) {
  respuesta11 = document.getElementById(evt.target.id).value
}

//Respuesta 12
function respuestaDoce(evt) {
  respuesta12 = document.getElementById(evt.target.id).value
}

//Respuesta 13 
function respuestaTrece(evt) {
  respuesta13 = document.getElementById(evt.target.id).value
}

//Respuesta 14
function respuestaCatorce(evt) {
  respuesta14 = document.getElementById(evt.target.id).value
}

//Respuesta 15
function respuestaQuince(evt) {
  respuesta15 = document.getElementById(evt.target.id).value
}

//Respuesta 16
function respuestaDieciseis(evt) {
  respuesta16 = document.getElementById(evt.target.id).value
}

//Respuesta 17
function respuestaDiecisiete(evt) {
  respuesta17 = document.getElementById(evt.target.id).value
}

//Respuesta 18
function respuestaDieciocho(evt) {
  respuesta18 = document.getElementById(evt.target.id).value
}

//Respuesta 19
function respuestaDiecinueve(evt) {
  respuesta19 = document.getElementById(evt.target.id).value
}

//Respuesta 20
function respuestaVeinte(evt) {
  respuesta20 = document.getElementById(evt.target.id).value
}

//Respuesta 21
function respuestaVeintiuno(evt) {
  respuesta21 = document.getElementById(evt.target.id).value
}

//Respuesta 22
function respuestaVeintidos(evt) {
  respuesta22 = document.getElementById(evt.target.id).value
}

//Respuesta 23  
function respuestaVeintitres(evt) {
  respuesta23 = document.getElementById(evt.target.id).value
}

//Respuesta 24  
function respuestaVeinticuatro(evt) {
  respuesta24 = document.getElementById(evt.target.id).value
}

//Respuesta 25  
function respuestaVeinticinco(evt) {
  respuesta25 = document.getElementById(evt.target.id).value
}

//Respuesta 26  
function respuestaVeintiseis(evt) {
  respuesta26 = document.getElementById(evt.target.id).value
}


//Respuesta 27  
function respuestaVeintisiete(evt) {
  respuesta27 = document.getElementById(evt.target.id).value
}

//Respuesta 28  
function respuestaVeintiocho(evt) {
  respuesta28 = document.getElementById(evt.target.id).value
}

//Respuesta 29 
function respuestaVeintinueve(evt) {
  respuesta29 = document.getElementById(evt.target.id).value
}

//Respuesta 30 
function respuestaTreinta(evt) {
  respuesta30 = document.getElementById(evt.target.id).value
}

//Respuesta 31 
function respuestaTreintayuno(evt) {
  respuesta31 = document.getElementById(evt.target.id).value
}

//Validando las respuestas para determinar los riesgos

function validarRespuestas() {
  if (respuesta1 == "a") {
    alert("Fin de la prueba");
    saveAndClear()
  }
  if ((respuesta1 == "b" || respuesta1 == "c") && respuesta2 > 0 && respuesta3 > 0 && respuesta4 > 0) {
    if (respuesta5 == "a" && (respuesta6 == "a" || respuesta6 == "b")) {
      alert("Sin riesgo de embarazo , sin riesgo de ITS, etapa de cambio: sin etapa")
      saveAndClear()
    }
    if (respuesta5 == "b" || respuesta5 == "c" || respuesta5 == "d" || respuesta5 == "e") {
      if (respuesta8 == "a" || respuesta12 == "a") {
        if (respuesta9 == "a" || respuesta13 == "a") {
          if (respuesta18 == "a") {

            if (respuesta19 == "a") {
              alert("Riesgo medio de embarazo, riesgo bajo de ITS, etapa de cambio : Sin etapa");
              saveAndClear()
            }

            if ((respuesta19 == "b" || respuesta19 == "c")) {
              alert("Riesgo alto de embarazo, riesgo bajo de ITS, etapa de cambio: Sin etapa");
              saveAndClear()
            }

            if (respuesta19 == "d") {
              if (respuesta20 == "a") {
                if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                  if (respuesta21 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta21 == "b" || respuesta21 == "c") {
                    alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion")
                    saveAndClear()
                  }

                  if (respuesta21 == "d") {
                    alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion");
                    saveAndClear()
                  }

                }
              }


              if (respuesta20 == "b") {
                if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                  if (respuesta21 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta21 == "b" || respuesta21 == "c") {
                    alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Accion");
                    saveAndClear()
                  }
                  if (respuesta21 == "d") {
                    alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Accion");
                    saveAndClear()
                  }

                }
              }

              if (respuesta20 == "c") {
                if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                  if (respuesta21 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta21 == "b" || respuesta21 == "c") {
                    alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta21 == "d") {
                    alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Mantenimiento");
                    saveAndClear()
                  }

                }
              }

            }


            if (respuesta19 == "e") {
              if (respuesta23 == "a") {
                if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                  if (respuesta24 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta24 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta24 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta23 == "b") {
                if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                  if (respuesta24 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta24 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta24 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta23 == "c") {
                if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                  if (respuesta24 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta24 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta24 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                }
              }
            }



            if (respuesta19 == "f" || respuesta19 == "g") {
              if (respuesta26 == "a") {
                if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                  if (respuesta27 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta27 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta27 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta26 == "b") {
                if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                  if (respuesta27 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta27 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta27 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                }
              }

              if (respuesta26 == "c") {
                if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                  if (respuesta27 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta27 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                  if (respuesta27 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                }
              }
            }


            if (respuesta19 == "h") {
              if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
                if (respuesta29 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo bajo de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta29 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo bajo de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta29 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo bajo de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta18 == "b") {
            if (respuesta31 != "h") {
              alert("Riesgo alto de embarazo, riesgo bajo de ITS, etapa de cambio: Contemplacion");
              saveAndClear()
            }
            if (respuesta31 == "h") {
              alert("Riesgo alto de embarazo, riesgo bajo de ITS, etapa de cambio: Precontemplacion");
              saveAndClear()
            }
          }


        }
      }

      if (respuesta8 == "b" || respuesta12 == "b") {
       if (respuesta18 == "a") {

          if (respuesta19 == "a") {
            alert("Riesgo medio de embarazo, riesgo medio de ITS, etapa de cambio : Sin etapa");
            saveAndClear()
          }

          if ((respuesta19 == "b" || respuesta19 == "c")) {
            alert("Riesgo alto de embarazo, riesgo medio de ITS, etapa de cambio: Sin etapa");
            saveAndClear()
          }

          if (respuesta19 == "d") {
            if (respuesta20 == "a") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "b") {
                  alert("Riesgo medio de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }

                if (respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo medio de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo bajo de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }


              }
            }


            if (respuesta20 == "b") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio:  Accion");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo medio de ITS, Etapa de camio:  Accion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo medio de ITS, Etapa de camio: Accion");
                  saveAndClear()
                }

              }
            }

            if (respuesta20 == "c") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo medio de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo medio de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }

              }
            }

          }
          if (respuesta19 == "e") {
            if (respuesta23 == "a") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "b") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "c") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "f" || respuesta19 == "g") {
            if (respuesta26 == "a") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "b") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "c") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "h") {
            if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
              if (respuesta29 == "a") {
                alert("Riesgo bajo de embarazo, Riesgo medio de ITS, Etapa de cambio: Preparacion");
                saveAndClear()
              }
              if (respuesta29 == "b") {
                alert("Riesgo Medio de embarazo, Riesgo medio de ITS, Etapa de cambio: Accion");
                saveAndClear()
              }
              if (respuesta29 == "c") {
                alert("Riesgo alto de embarazo, Riesgo medio de ITS, Etapa de cambio: Mantenimiento");
                saveAndClear()
              }
            }
          }
        }
      }


      if (respuesta18 == "b") {
        if (respuesta31 != "h") {
          alert("Riesgo alto de embarazo, riesgo medio de ITS, etapa de cambio: Contemplacion");
          saveAndClear()
        }
        if (respuesta31 == "h") {
          alert("Riesgo alto de embarazo, riesgo medio de ITS, etapa de cambio: Precontemplacion");
          saveAndClear()
        }
      }

    }

    if(respuesta5 == "f" || respuesta5 =="g"){
      if (respuesta8 == "a" || respuesta8 == "b" || respuesta8 == "c" || respuesta8 == "d" || respuesta8 == "e" || respuesta12 == "a" || respuesta12 == "b" || respuesta12 == "c" || respuesta12 == "d" ||respuesta12 == "e"){
        if((respuesta9 == "a" || respuesta9=="b" || respuesta9 == "c") && (respuesta13 == "a" || respuesta13 == "b" || respuesta13 == "c")){
            if (respuesta18 == "a") {

              if (respuesta19 == "a") {
                alert("Riesgo medio de embarazo, riesgo alto de ITS, etapa de cambio : Sin etapa");
                saveAndClear()
              }

              if ((respuesta19 == "b" || respuesta19 == "c")) {
                alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Sin etapa");
                saveAndClear()
              }

              if (respuesta19 == "d") {
                if (respuesta20 == "a") {
                  if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                    if (respuesta21 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta21 == "b") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                      saveAndClear()
                    }

                    if (respuesta21 == "c") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta21 == "d") {
                      alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                      saveAndClear()
                    }


                  }
                }


                if (respuesta20 == "b") {
                  if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                    if (respuesta21 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta21 == "b" || respuesta21 == "c") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                      saveAndClear()
                    }
                    if (respuesta21 == "d") {
                      alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                      saveAndClear()
                    }

                  }
                }

                if (respuesta20 == "c") {
                  if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                    if (respuesta21 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta21 == "b" || respuesta21 == "c") {
                      alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta21 == "d") {
                      alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                      saveAndClear()
                    }

                  }
                }

              }

              if (respuesta19 == "e") {
                if (respuesta23 == "a") {
                  if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                    if (respuesta24 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta24 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta24 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta23 == "b") {
                  if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                    if (respuesta24 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta24 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta24 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta23 == "c") {
                  if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                    if (respuesta24 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta24 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta24 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                  }
                }
              }


              if (respuesta19 == "f" || respuesta19 == "g") {
                if (respuesta26 == "a") {
                  if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                    if (respuesta27 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta27 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                    if (respuesta27 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta26 == "b") {
                  if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                    if (respuesta27 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta27 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                    if (respuesta27 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                      saveAndClear()
                    }
                  }
                }

                if (respuesta26 == "c") {
                  if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                    if (respuesta27 == "a") {
                      alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta27 == "b") {
                      alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                    if (respuesta27 == "c") {
                      alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                      saveAndClear()
                    }
                  }
                }
              }


              if (respuesta19 == "h") {
                if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
                  if (respuesta29 == "a") {
                    alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                    saveAndClear()
                  }
                  if (respuesta29 == "b") {
                    alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                    saveAndClear()
                  }
                  if (respuesta29 == "c") {
                    alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                    saveAndClear()
                  }
                }
              }
            }


            if (respuesta18 == "b") {
              if (respuesta31 != "h") {
                alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Contemplacion");
                saveAndClear()
              }
              if (respuesta31 == "h") {
                alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Precontemplacion");
                saveAndClear()
              }

            }
        }
      }

      if (respuesta8 == "c" || respuesta8 == "d" || respuesta8 == "e" || respuesta12 == "c" || respuesta12 == "d" ||respuesta12 == "e") {
        if (respuesta18 == "a") {

          if (respuesta19 == "a") {
            alert("Riesgo medio de embarazo, riesgo alto de ITS, etapa de cambio : Sin etapa");
            saveAndClear()
          }

          if ((respuesta19 == "b" || respuesta19 == "c")) {
            alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Sin etapa");
            saveAndClear()
          }

          if (respuesta19 == "d") {
            if (respuesta20 == "a") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "b") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }

                if (respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Preparacion");
                  saveAndClear()
                }


              }
            }


            if (respuesta20 == "b") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Accion");
                  saveAndClear()
                }

              }
            }

            if (respuesta20 == "c") {
              if ((respuesta22 == "a" || respuesta22 == "b" || respuesta22 == "c")) {
                if (respuesta21 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "b" || respuesta21 == "c") {
                  alert("Riesgo medio de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta21 == "d") {
                  alert("Riesgo alto de embarazo, riesgo alto de ITS, Etapa de camio: Mantenimiento");
                  saveAndClear()
                }

              }
            }

          }



          if (respuesta19 == "e") {
            if (respuesta23 == "a") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "b") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta23 == "c") {
              if ((respuesta25 == "a" || respuesta25 == "b" || respuesta25 == "c")) {
                if (respuesta24 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta24 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "f" || respuesta19 == "g") {
            if (respuesta26 == "a") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "b") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                  saveAndClear()
                }
              }
            }

            if (respuesta26 == "c") {
              if ((respuesta28 == "a" || respuesta28 == "b" || respuesta28 == "c")) {
                if (respuesta27 == "a") {
                  alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "b") {
                  alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
                if (respuesta27 == "c") {
                  alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                  saveAndClear()
                }
              }
            }
          }


          if (respuesta19 == "h") {
            if ((respuesta30 == "a" || respuesta30 == "b" || respuesta30 == "c")) {
              if (respuesta29 == "a") {
                alert("Riesgo bajo de embarazo, Riesgo alto de ITS, Etapa de cambio: Preparacion");
                saveAndClear()
              }
              if (respuesta29 == "b") {
                alert("Riesgo Medio de embarazo, Riesgo alto de ITS, Etapa de cambio: Accion");
                saveAndClear()
              }
              if (respuesta29 == "c") {
                alert("Riesgo alto de embarazo, Riesgo alto de ITS, Etapa de cambio: Mantenimiento");
                saveAndClear()
              }
            }
          }
        }


        if (respuesta18 == "b") {
          if (respuesta31 != "h") {
            alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Contemplacion");
            saveAndClear()
          }
          if (respuesta31 == "h") {
            alert("Riesgo alto de embarazo, riesgo alto de ITS, etapa de cambio: Precontemplacion");
            saveAndClear()
          }
        }

      }
    
    }
    
    if(respuesta5 == "h"){
      alert("Sin riesgo de embarazo, riesgo bajo de ITS, etapa de cambio : Sin etapa");
      saveAndClear()
    }

  } 
}


function saveAndClear () {
  var json = {
    resp1: respuesta1,
    resp2: respuesta2,
    resp3: respuesta3,
    resp4: respuesta4,
    resp5: respuesta5,
    resp6: respuesta6,
    resp7: respuesta7,
    resp8: respuesta8,
    resp9: respuesta9,
    resp10: respuesta10,
    resp11: respuesta11,
    resp12: respuesta12,
    resp13: respuesta13,
    resp14: respuesta14,
    resp15: respuesta15,
    resp16: respuesta16,
    resp17: respuesta17,
    resp18: respuesta18,
    resp19: respuesta19,
    resp20: respuesta20,
    resp21: respuesta21,
    resp22: respuesta22,
    resp23: respuesta23,
    resp24: respuesta24,
    resp25: respuesta25,
    resp26: respuesta26,
    resp27: respuesta27,
    resp28: respuesta28,
    resp29: respuesta29,
    resp30: respuesta30,
    resp31: respuesta31
  }
  console.log(json)
  var db = firebase.firestore()
  db.collection('responses').add(json)

}

var btnSubmit = document.getElementById('enviar')
btnSubmit.addEventListener('click', function (evt) {
  // prevent the refresh of the browser
  evt.preventDefault()
  var fillInput = false
  if (respuesta2.length == 0) {
    alert("Ingrese respuesta a la pregunta N° 2");
    fillInput = true
  }

  if (respuesta3.length == 0) {
    alert("Ingrese respuesta a la pregunta N° 3");
    fillInput = true
  }

  if (respuesta4.length == 0) {
    alert("Ingrese respuesta a la pregunta N° 4");
    fillInput = true
  }

  if (!fillInput) validarRespuestas()
})

