
TESTS = $(shell find *.js)

test:
	@./runTest $(TESTS)

.PHONY: test
