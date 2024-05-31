pronouns = ['my', 'your', 'our']
adjectives = ['awesome', 'amazing', 'fantastic']
nouns = ['website', 'blog', 'store']

domain_names = []

for pronoun in pronouns:
    for adjective in adjectives:
        for noun in nouns:
            domain_names.append(pronoun + adjective + noun + '.com')

print("Generated Domain Names:")
for domain_name in domain_names:
    print(domain_name)
