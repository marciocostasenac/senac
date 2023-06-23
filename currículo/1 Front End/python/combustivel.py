precoAlcool = float(input("insira o valor do alcool:"))
precoGasolina = float(input("Insira o valor da gasolina:"))


resultado = precoAlcool/precoGasolina
print(resultado)


if resultado > 0.7:
    print("abasteça com gasolina")
else:
    print("abasteça com alcool")    