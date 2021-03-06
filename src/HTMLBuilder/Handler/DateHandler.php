<?php

namespace HTMLBuilder\Handler;

/**
 * @since 2.3
 */
class DateHandler implements HandlerInterface
{
    public function handle(&$values, &$extras)
    {
        // Impostazione alla data corrente se il contenuto corrisponde a "now"
        if ($values['value'] == '-now-') {
            $values['value'] = date(\Translator::getFormatter()->getStandardFormats()['timestamp']);
        }

        if ($values['max-date'] == '-now-') {
            $values['max-date'] = date(\Translator::getFormatter()->getStandardFormats()['timestamp']);
        }

        if ($values['min-date'] == '-now-') {
            $values['min-date'] = date(\Translator::getFormatter()->getStandardFormats()['timestamp']);
        }

        if ($values['type'] == 'timestamp' && \Translator::getFormatter()->isStandardTimestamp($values['value'])) {
            $values['value'] = \Translator::timestampToLocale($values['value']);
        } elseif ($values['type'] == 'date' && \Translator::getFormatter()->isStandardDate($values['value'])) {
            $values['value'] = \Translator::dateToLocale($values['value']);
        } elseif ($values['type'] == 'time' && \Translator::getFormatter()->isStandardTime($values['value'])) {
            $values['value'] = \Translator::timeToLocale($values['value']);
        }

        if (!(
            ($values['type'] == 'timestamp' && \Translator::getFormatter()->isFormattedTimestamp($values['value'])) ||
            ($values['type'] == 'date' && \Translator::getFormatter()->isFormattedDate($values['value'])) ||
            ($values['type'] == 'time' && \Translator::getFormatter()->isFormattedTime($values['value']))
        )) {
            $values['value'] = '';
        }

        $result = $this->{$values['type']}($values, $extras);

        $values['type'] = 'text';

        if (empty($result)) {
            $result = '
    <input |attr|>';
        }

        return $result;
    }

    protected function timestamp(&$values, &$extras)
    {
        $values['class'][] = 'text-center';
        $values['class'][] = 'timestamp-picker';
        $values['class'][] = 'timestamp-mask';
    }

    protected function date(&$values, &$extras)
    {
        $values['class'][] = 'text-center';
        $values['class'][] = 'datepicker';
        $values['class'][] = 'date-mask';
    }

    protected function time(&$values, &$extras)
    {
        $values['class'][] = 'text-center';
        $values['class'][] = 'timepicker';
    }
}
