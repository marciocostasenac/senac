#entrada de dados
altura = float(input("Digite sua altura:"))
peso = float(input ("digite seu peso"))

#processamento de dados
imc = peso / (altura * altura)

print(imc)

if imc<15:
    print('Muito Magro')
elif imc < 18.5:
    print('Magreza Leve')   
elif imc < 24.9:
    print('peso normal')   
elif imc < 29.9:
    print ('Acima do Peso') 
elif imc < 39.8:
    print('obesidade I') 
elif imc < 40 :
    print('obesidade II') 
else :
    print ('obesidade III')            