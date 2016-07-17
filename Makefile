
TESTS = $(shell find js -name '*.js')

test:
	@./bin/runTest $(TESTS)

.PHONY: test
