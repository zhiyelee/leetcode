
TESTS = $(shell find js -name '*.js')

test:
	@./runTest $(TESTS)

.PHONY: test
