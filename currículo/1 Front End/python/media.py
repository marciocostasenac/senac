# entrada de dados

notaI = float(input("insira a primeira nota"))
notaII = float(input("insira a segunda nota"))
notaIII = float(input("insira a terceira nota"))
notaIV = float (input("insira a quarta nota"))

#processamento de dados

notafinal = (notaI + notaII + notaIII +notaIV) / 4

print(final)

if final<60:
    print('reprovado')
elif final < 70: 
    print('resultado mediano')
elif final < 80 :
    print('resultado bom')
elif final < 90 :
    print('resultado excelente')   
else: 
    print('nota máxima')     
    
    